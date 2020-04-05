(function(){
    document.querySelector('#search').addEventListener('click',function(){
        let searchform = document.forms['searchf'];
        let inputvalue = searchform.sr.value;
        let res = new XMLHttpRequest();
        res.open('GET',`https://api.itbook.store/1.0/search/html/${inputvalue}`, false);
        res.send();
        document.querySelector('.result').innerHTML += res.responseText;
        console.log(res.status);
        console.log(inputvalue);
        searchform.reset();
    });
})();