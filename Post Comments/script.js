$(document).ready(function(){
    $("#my-form").submit(function(event){
        var $input = $(event.target).find("input");
        var comment = $input.val();

        if(comment != ""){
            var html = $("<li>").text(comment)
            html.prependTo("#comments")
            $input.val("");
        }
    return false;
    });
});

// var main = function(){
//     $("#my-form").submit(function(event){
//         debugger
//         var $input = $(event.target).find("input");
//         var comment = $input.val();

//         if(comment != ""){
//             var html = $("<li>").text(comment)
//             html.prependTo("#comments")
//         }
    
//     });
//     return false;
// }

// $(document).ready(main());

// $(document).ready({

    
// //     ('#my-form').on('submit',function() {
// //         debugger
 
// //     }) 
 
// //  });
// $(document).ready({
//     $('form').submit(function() {
 
//        //Do stuff here
 
//     }); 
 
//  });
// $(document).ready(function(){
//      $('#my-form').on('submit', function(){
//         var $input = $(event.target).find("input");
//         var comment = $input.val();

//         if(comment != ""){
//             var html = $("<li>").text(comment)
//             html.prependTo("#comments")
//         }
//         return false;
//     }) 
// });