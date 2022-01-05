<template>
  <div>

    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">04</span>
        <span class="mx-1 fs-3">Enero</span>
        <span class="mx-2 fs-4 fw-light">2022, martes</span>
      </div>

      <div>
        <button class="btn btn-danger mx-2">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>

        <button class="btn btn-primary mx-2">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Que sucedió hoy?"></textarea>
    </div>

    <Fab icon="fa-save" />

    <img src="https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg" alt="entry-picture" class="img-thumbnail">

  </div>
</template>

<script>
import Fab from '../components/Fab'

export default {
  components: {
    Fab
  }
}
</script>

<style lang="scss" scoped>

textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
}

</style>