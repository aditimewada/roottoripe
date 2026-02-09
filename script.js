// Small interactions: smooth scroll and lazy image preview
document.addEventListener('click', function(e){
  if(e.target.matches('.cta')){
    e.preventDefault();
    document.querySelector('#recipes').scrollIntoView({behavior:'smooth'});
  }
});

// If user drops a local photo onto the placeholder, preview it (optional)
const photo = document.getElementById('profile-photo');
if(photo){
  photo.addEventListener('dragover', e=>e.preventDefault());
  photo.addEventListener('drop', async e=>{
    e.preventDefault();
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    if(!f) return;
    const url = URL.createObjectURL(f);
    photo.src = url;
  });
}
