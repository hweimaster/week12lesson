

const workoutURL = "http://localhost:3000/week12"

$.get(workoutURL).then((data) => 
    data.map((workout) => { //gets te data add to the table
        $('tbody').append(
            $(`
            <tr>
                <td>${workout.id}</td>
                <td>${workout.Workout}</td>
                <td>${workout.Exercise}</td>
                <td>${workout.Reps}</td>
                <td>${workout.Sets}</td>
                <td>
                <button class = "btn btn-dark" onclick = "deleteWorkout${workout.id}">Delete</button>
                </td>
            </tr>`)
        )
    })
)

$('#createWorkout').click(function () {
    $.post(workoutURL, {
      Workout: $('#newWorkout').val(),
      Exercise: $('#newExercise').val(),
      Reps: $('#reps').val(),
      Sets: $('#sets').val(),
    })
  })

function deleteWorkout(id) {
    $.ajax(`${workoutURL}/${id}`, {
      type: 'DELETE',
    })
}

function updateWorkout() {
    id = $('#update-workout-id').val()
  
    $.ajax(`${workoutURL}/${id}`, {
      method: 'PUT',
      data: {
        Workout: $('#update-workout').val(),
        Exercise: $('#update-exercise').val(),
        Reps: $('#update-reps').val(),
        Sets: $('#update-sets').val(),
      },
    })
  }
  
  $('#updateWorkout').click(updateWorkout)