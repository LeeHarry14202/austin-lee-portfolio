export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
  category: 'film' | 'stills';
  images?: string[]; // Array of image URLs for the project detail page
}

const sampleImages = Array(12).fill('https://res.cloudinary.com/djpmslpgu/image/upload/v1759512465/vagabond_1_bbn8j7.jpg');

export const projects: Project[] = [
  {
    id: 'hansie-lifestyle',
    title: 'Hansie Lifestyle Campaign',
    description: ``,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402420/hansie_lifestyle_campaign_007_s3jrqs.jpg',
    imageAlt: 'Hansie Lifestyle Campaign',
    category: 'stills',
    link: '/hansie-lifestyle',
    images: [
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402420/hansie_lifestyle_campaign_001_is0hre.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402430/hansie_lifestyle_campaign_002_dkror7.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402443/hansie_lifestyle_campaign_003_pdibll.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402401/hansie_lifestyle_campaign_004_vcmf2v.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402406/hansie_lifestyle_campaign_005_sqtvxd.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402391/hansie_lifestyle_campaign_006_aac19k.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402377/hansie_lifestyle_campaign_007_s3jrqs.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402448/hansie_lifestyle_campaign_008_s7vgi1.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402453/hansie_lifestyle_campaign_009_vxkpan.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402396/hansie_lifestyle_campaign_010_puiwyu.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402410/hansie_lifestyle_campaign_011_y3w73o.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402386/hansie_lifestyle_campaign_012_omi6pu.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402382/hansie_lifestyle_campaign_013_lcmr9r.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402425/hansie_lifestyle_campaign_014_skyuyz.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402420/hansie_lifestyle_campaign_015_gpsgta.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402434/hansie_lifestyle_campaign_016_iu2rbh.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402438/hansie_lifestyle_campaign_017_xd9nki.jpg'
    ]
  },
  {
    id: 'pistol-ac-pierre',
    title: 'Pierre x Pistol',
    description: ``,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402485/pistol_ac_x_pierre_006_zpygyv.jpg',
    imageAlt: 'Pierre x Pistol Collaboration',
    category: 'stills',
    link: '/pistol-ac-pierre',
    images: [
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402468/pistol_ac_x_pierre_001_zb802n.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402481/pistol_ac_x_pierre_002_svnwtb.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402477/pistol_ac_x_pierre_003_dc51ft.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402498/pistol_ac_x_pierre_004_xyhgqo.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402494/pistol_ac_x_pierre_005_maxzr2.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402485/pistol_ac_x_pierre_006_zpygyv.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402490/pistol_ac_x_pierre_007_jiaicu.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402463/pistol_ac_x_pierre_008_vzw0by.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402458/pistol_ac_x_pierre_009_qwj2oe.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402502/pistol_ac_x_pierre_010_ogpdea.jpg'
    ]
  },
  {
    id: 'wombi-campaign',
    title: 'Wombi Campaign',
    description: ``,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403476/wombi_campaign_026_kjhuce.jpg',
    imageAlt: 'Wombi Brand Campaign',
    category: 'stills',
    link: '/wombi-campaign',
    images: [
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403504/wombi_campaign_001_dbf13e.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403496/wombi_campaign_002_qqlbgx.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403480/wombi_campaign_003_wd4spo.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403531/wombi_campaign_004_blyeqf.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403519/wombi_campaign_005_cziohy.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403539/wombi_campaign_006_e94gdm.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403551/wombi_campaign_007_p0x9ev.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403437/wombi_campaign_008_qko0qu.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403414/wombi_campaign_009_icibsi.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403535/wombi_campaign_010_pzgjwl.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403515/wombi_campaign_011_qvyjkx.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403542/wombi_campaign_012_wd6gq8.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403476/wombi_campaign_026_kjhuce.jpg'
    ]
  },
  {
    id: 'football-culture',
    title: 'Football Culture Editorial',
    description: ``,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403315/football_culture_012_ghi04o.jpg',
    imageAlt: 'Football Culture Editorial',
    category: 'stills',
    link: '/football-culture',
    images: [
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403274/football_culture_001_nv9spb.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403315/football_culture_002_cc0dom.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403299/football_culture_003_fqv0yc.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403224/football_culture_004_aazdvh.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403201/football_culture_005_nzyuon.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403021/football_culture_006_eg3mzx.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403051/football_culture_007_fqoipe.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403028/football_culture_008_lc1imi.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403000/football_culture_009_mqst0x.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403235/football_culture_010_g0ridm.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403184/football_culture_011_hyhxoj.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403034/football_culture_012_ghi04o.jpg'
    ]
  },
  {
    id: 'pierre-hansie',
    title: 'Pierre x Hansie Polo Shirt',
    description: ``,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402537/pierre_x_hansie_003_gmcq9u.jpg',
    imageAlt: 'Pierre x Hansie Polo Shirt Launch',
    category: 'stills',
    link: '/pierre-hansie',
    images: [
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402537/pierre_x_hansie_001_hbb1tr.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402537/pierre_x_hansie_002_k4dyki.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402524/pierre_x_hansie_003_gmcq9u.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402559/pierre_x_hansie_004_wpcjea.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402552/pierre_x_hansie_005_xoo6ro.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402966/pierre_x_hansie_006_zoftko.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402983/pierre_x_hansie_007_rx21xp.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402513/pierre_x_hansie_008_ekz2mc.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402508/pierre_x_hansie_009_k7jugl.jpg'
    ]
  },
  {
    id: 'on-pitch-fashion',
    title: 'Off-Pitch Fashion Editorial',
    description: ``,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402368/on_pitch_fashion_001_ynh3xq.jpg',
    imageAlt: 'Off-Pitch Fashion Editorial',
    category: 'stills',
    link: '/on-pitch-fashion',
    images: [
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402350/on_pitch_fashion_001_ynh3xq.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402364/on_pitch_fashion_002_s9ghnw.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402357/on_pitch_fashion_003_eki4sr.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402339/on_pitch_fashion_004_hitn2e.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402334/on_pitch_fashion_005_mcblal.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402301/on_pitch_fashion_006_unmusf.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402306/on_pitch_fashion_007_jo57yu.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402372/on_pitch_fashion_008_xhemvf.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402368/on_pitch_fashion_009_exl8yn.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402344/on_pitch_fashion_010_zencuh.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402310/on_pitch_fashion_011_jz0esf.jpg'
    ]
  },
  {
    id: 'mg7-duy-anh',
    title: 'Duy Anh x MG7',
    description: ``,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403333/mg7_duy_anh_005_bbaqtm.jpg',
    imageAlt: 'Duy Anh x MG7 Collaboration',
    category: 'film',
    link: '/mg7-duy-anh',
    images: [
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402251/mg7_duy_anh_001_zzvccs.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402275/mg7_duy_anh_002_lgar8q.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402281/mg7_duy_anh_003_ehueqv.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402227/mg7_duy_anh_004_hxvhq8.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402247/mg7_duy_anh_005_bbaqtm.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402215/mg7_duy_anh_006_bu5viv.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402209/mg7_duy_anh_007_pfvfxg.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402291/mg7_duy_anh_008_xn8fap.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402296/mg7_duy_anh_009_hwbizw.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402234/mg7_duy_anh_010_odbtsi.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402240/mg7_duy_anh_011_scjqkn.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402221/mg7_duy_anh_012_at98iy.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402204/mg7_duy_anh_013_n5crnn.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402263/mg7_duy_anh_014_sfdidv.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402256/mg7_duy_anh_015_xgxefc.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402270/mg7_duy_anh_016_kisdqt.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402286/mg7_duy_anh_017_w3st3i.jpg'
    ]
  },
  {
    id: 'mg7-campaign',
    title: 'MG7 Campaign',
    description: ``,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403374/mg7_campaign_006_qitj3i.jpg',
    imageAlt: 'MG7 Campaign',
    category: 'stills',
    link: '/mg7-campaign',
    images: [
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403355/mg7_campaign_001_hzab69.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403364/mg7_campaign_002_bgn8ar.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403360/mg7_campaign_003_ycukvf.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403351/mg7_campaign_004_ey5vd0.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403345/mg7_campaign_005_mx0nab.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403339/mg7_campaign_006_qitj3i.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403333/mg7_campaign_007_jmn4wu.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403394/mg7_campaign_008_hxneia.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761403374/mg7_campaign_009_yka7op.jpg'
    ]
  },
  {
    id: 'karina-kotlarova',
    title: 'Karina Kotlarova',
    description: ``,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402155/karina_kotlarova_001_e7lvfn.jpg',
    imageAlt: 'Karina Kotlarova Portraits',
    category: 'stills',
    link: '/karina-kotlarova',
    images: [
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402134/karina_kotlarova_002_e1sxpd.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402126/karina_kotlarova_003_wtt2hn.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402163/karina_kotlarova_004_mljylq.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402155/karina_kotlarova_005_jsbuon.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402168/karina_kotlarova_006_p3rlux.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402173/karina_kotlarova_007_igyjyr.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402186/karina_kotlarova_008_kzxsre.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402182/karina_kotlarova_009_piffmw.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402151/karina_kotlarova_001_e7lvfn.jpg'
    ]
  },
  {
    id: 'in-the-mood-for-love',
    title: 'In the Mood For Love',
    description: ``,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402120/in_the_mood_for_love_006_s4hhja.jpg',
    imageAlt: 'In the Mood For Love Photography Series',
    category: 'stills',
    link: '/in-the-mood-for-love',
    images: [
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402019/in_the_mood_for_love_001_oku7ku.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761401879/in_the_mood_for_love_002_p5qudb.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761401869/in_the_mood_for_love_017_suqpzj.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402058/in_the_mood_for_love_012_by1jlp.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402064/in_the_mood_for_love_006_s4hhja.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402024/in_the_mood_for_love_005_zc3xwi.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402070/in_the_mood_for_love_007_jjct8e.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402114/in_the_mood_for_love_018_ldoi08.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402096/in_the_mood_for_love_021_fwjoh1.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402103/in_the_mood_for_love_020_pvs6c4.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402081/in_the_mood_for_love_022_ylrcyw.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1761402085/in_the_mood_for_love_023_ygdtgg.jpg'
    ]
  }
];
