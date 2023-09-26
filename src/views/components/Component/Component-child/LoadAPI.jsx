import { useState } from "react";
import { useEffect } from "react";
import Banner from "../Banner";
function LoadAPI() {
  var callComment = "http://localhost:3000/comment";
  var callUser = "http://localhost:3000/user";
  var result;
  fetch(callComment)
    .then(function (response) {
      return response.json();
    })
    .then(function (comment) {
      var userId = comment.map((value, index) => {
        return value.user_id;
      });
      return userId;
    })
    .then((user_id) => {
      fetch(callUser)
        .then(function (response) {
          return response.json();
        })
        .then(function (user) {
          console.log(user);
          result = user.filter((course, index) => {
            return user_id.includes(course.id);
          });
          return result;
        });
    });
  console.log(result);
}
export default LoadAPI;
