var liHtml = []
for (var i = 0; i < 100; i++) {
    liHtml.push(`<li >我是第${i + 1}个里标签,你看我的颜色!!!!</li>`)
}
$('#app').append(`<ul>${liHtml.join("")}</ul>`)
$("li:even").css({ background: 'pink', color: '#fff', fontSize: '30px' })