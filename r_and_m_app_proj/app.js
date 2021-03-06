//create 3 buttons for Rick, Morty, & Jerry
// buttons will get data from API & display it in console
//then begin to filter



$(() => {
  const $container = $('.container')

  //grabbing elements
  const $openBtn = $('#openModal')
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  //event handlers
  const openModal = () => {
    $modal.css('display', 'block')
  }
  const closeModal = () => {
    $modal.css('display', 'none');
  }

  //event listeners
  setTimeout(openModal, 500);
  $closeBtn.on('click', closeModal)


  $('.button').on('click', () => {
    event.preventDefault()

    let charID = $(event.target).attr('id')
    // console.log(charID);

    let link = `https://rickandmortyapi.com/api/character/${charID}`

    $.ajax(
      {
      url: link,
      type: 'GET',
      data: {

      }
    }
    ).then((info) => {
      console.log(info);
      $('#IMG').attr('src', info.image)


      $('.image3').text(info.status)


      $('.image2').text(info.name)


      $('.location').text(info.location.name)

    })
    .catch((err) => {
      console.log(err);
    })
  })
})//end of DOM
