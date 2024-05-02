const addSavedProduct = async(productId) => {
  const response = await fetch(`/kartezy/savedProduct/${productId}`, {method: "POST"});
  const result = await response.json();
  if(response.status == 200){
    Swal.fire({
      position: "middle",
      icon: "success",
      title: result.message,
      showConfirmButton: false,
      timer: 1500
    });
  }
  else{
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: result.message || 'Somethig is wrong..',
      showConfirmButton: false,
      timer: 2000
    });
  }
}