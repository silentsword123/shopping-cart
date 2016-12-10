/**
 * Created by deng_ on 12/10/2016.
 */
(function($,location){
    var newForm=$("#inputForm");
    var imageInput=$("#imageInput");
    var titleInput=$("#titleInput");
    var labelInput=$("#labelInput");
    var descriptionInput=$("#descriptionInput");
    var priceInput=$("#priceInput");
    newForm.submit(function(event){
        event.preventDefault();

        var newImage=imageInput.val();
        var newTitle=titleInput.val();
        var newLabel=labelInput.val();
        var newDescription=descriptionInput.val();
        var newPrice=priceInput.val();
        if(!newImage) alert("You must provide the image path.");
        if(!newTitle) alert("You must provide the title.");
        if(!newLabel) alert("You must provide the lable.");
        if(!newDescription) alert("You must provide the description.");
        if(!newPrice) alert("You must provide the price.");
        if(newImage&&newTitle&&newLabel&&newDescription&&newPrice){
            var requestConfig={
                method:"POST",
                url:"/product/add/product",
                contentType:"application/json",
                data: JSON.stringify({
                    image:newImage,
                    title:newTitle,
                    label:newLabel,
                    description:newDescription,
                    price:newPrice,
                    complete:function () {
                        alert("complete");
                    }
                })
            };
            $.ajax(requestConfig).success(function (data) {
                window.location.replace(data.redirect);
            })
        }
    });

})(window.jQuery,window.location);