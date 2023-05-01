/*xóa item trong shopping cart*/
var $removeItem = $('.remove');
$removeItem.on('click',function(){
   var $item = $(this).parents('.cart_item');
   $item.remove();
   alert('Bạn đã xóa thành công sản phẩm.');
})
