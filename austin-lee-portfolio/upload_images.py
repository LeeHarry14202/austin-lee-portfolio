import os
import requests
from pathlib import Path
from PIL import Image
import io

# Configuration
CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/djpmslpgu/image/upload"
UPLOAD_PRESET = "upload-austin-lee-portfolio"
IMAGE_FOLDER = "about"
# IMAGE_FOLDER = "upload_data"
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB in bytes

def compress_image(image_path, max_size=MAX_FILE_SIZE, quality=85):
    """Compress image if it's larger than max_size"""
    file_size = os.path.getsize(image_path)
    
    if file_size <= max_size:
        # File is small enough, return original
        with open(image_path, 'rb') as f:
            return f.read(), os.path.basename(image_path)
    
    print(f"  File too large ({file_size / 1024 / 1024:.2f}MB), compressing...")
    
    # Open and compress the image
    img = Image.open(image_path)
    
    # Convert RGBA to RGB if necessary
    if img.mode in ('RGBA', 'LA', 'P'):
        background = Image.new('RGB', img.size, (255, 255, 255))
        if img.mode == 'P':
            img = img.convert('RGBA')
        background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
        img = background
    
    # Try different quality levels to get under the size limit
    for q in range(quality, 30, -5):
        output = io.BytesIO()
        img.save(output, format='JPEG', quality=q, optimize=True)
        compressed_size = output.tell()
        
        if compressed_size <= max_size:
            print(f"  Compressed to {compressed_size / 1024 / 1024:.2f}MB (quality={q})")
            output.seek(0)
            return output.read(), os.path.basename(image_path)
    
    # If still too large, resize the image
    print(f"  Still too large, resizing...")
    scale_factor = 0.8
    new_width = int(img.width * scale_factor)
    new_height = int(img.height * scale_factor)
    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    output = io.BytesIO()
    img.save(output, format='JPEG', quality=85, optimize=True)
    compressed_size = output.tell()
    print(f"  Resized and compressed to {compressed_size / 1024 / 1024:.2f}MB")
    output.seek(0)
    return output.read(), os.path.basename(image_path)

def upload_image(image_path):
    """Upload a single image to Cloudinary"""
    try:
        print(f"Uploading {os.path.basename(image_path)}...")
        
        # Compress image if necessary
        image_data, filename = compress_image(image_path)
        
        files = {'file': (filename, image_data, 'image/jpeg')}
        data = {'upload_preset': UPLOAD_PRESET}
        
        response = requests.post(CLOUDINARY_URL, files=files, data=data)
        
        if response.status_code == 200:
            result = response.json()
            print(f"✓ Success: {result.get('secure_url', 'No URL returned')}")
            return True, result
        else:
            print(f"✗ Failed: {response.status_code} - {response.text}")
            return False, None
                
    except Exception as e:
        print(f"✗ Error uploading {os.path.basename(image_path)}: {str(e)}")
        return False, None

def upload_multiple_images(folder_path):
    """Upload all images from the specified folder and its subfolders"""
    # Supported image extensions
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff'}

    folder = Path(folder_path)
    if not folder.exists():
        print(f"Error: Folder {folder_path} does not exist!")
        return

    # Get all image files recursively
    image_files = []
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if Path(file).suffix.lower() in image_extensions:
                image_files.append(Path(root) / file)
    
    if not image_files:
        print(f"No image files found in {folder_path}")
        return
    
    print(f"Found {len(image_files)} image(s) to upload\n")
    
    # Upload each image
    success_count = 0
    failed_count = 0
    results = []
    
    for image_file in image_files:
        success, result = upload_image(image_file)
        if success:
            success_count += 1
            results.append(result)
        else:
            failed_count += 1
        print()  # Empty line for readability
    
    # Summary
    print("=" * 60)
    print(f"Upload Summary:")
    print(f"  Total: {len(image_files)}")
    print(f"  Success: {success_count}")
    print(f"  Failed: {failed_count}")
    print("=" * 60)
    
    # Print all URLs
    if results:
        print("\nUploaded Image URLs:")
        for result in results:
            print(f"  - {result.get('secure_url', 'N/A')}")

if __name__ == "__main__":
    upload_multiple_images(IMAGE_FOLDER)

