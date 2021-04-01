
export default function detailAuthor (name) {
  if (name === 'Seneca') {
    return 'http://www.themajormunch.com/wp-content/uploads/2018/08/seneca_360x450_0-570x600.jpg';
  } else if (name === 'Epictetus') {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece.jpg/400px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_%28Oxford_1715%29_frontispiece.jpg';
  } else if (name=== 'Marcus Aurelius') {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/L%27Image_et_le_Pouvoir_-_Buste_cuirass%C3%A9_de_Marc_Aur%C3%A8le_ag%C3%A9_-_3.jpg/440px-L%27Image_et_le_Pouvoir_-_Buste_cuirass%C3%A9_de_Marc_Aur%C3%A8le_ag%C3%A9_-_3.jpg'
  } else {
    return 'https://upload.wikimedia.org/wikipedia/commons/4/44/Duble_herma_of_Socrates_and_Seneca_Antikensammlung_Berlin_07.jpg';
  }
}