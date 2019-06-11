function addClassToParent($parentClass, $childClass, $addedClass) {
  let classList = document.getElementsByClassName($parentClass);
  for (let i = 0; i < classList.length; i++) {
    if (classList[i].getElementsByClassName($childClass).length > 0) {
      classList[i].classList.add($addedClass);
    }
  }
}
