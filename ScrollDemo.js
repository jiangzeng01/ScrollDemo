var headerHeight = 60;
var footerHeight = 0;
var otherContentHeight = 1500;
var content=document.getElementById('content');
var pages=getByClass(content, 'page');
var pageHeightArr = GetPageHeightArr();

function ClickPage(e){
    var clickPageIndex = parseInt(e.target.id);
    var scrollToValue = otherContentHeight;
    for (var i=0;i<clickPageIndex;i++)
    {
        scrollToValue = scrollToValue + pageHeightArr[i];
    }
    window.scrollTo(0, scrollToValue);
}

function GetPageHeightArr (){
    var pageHeightArr = [];
    for (var i=0;i<pages.length;i++)
    {
        var pageHeightPx = window.getComputedStyle(pages[i]).height;
        var pageHeight = parseInt(pageHeightPx.slice(0, pageHeightPx.length-2));
        pageHeightArr.push(pageHeight);
    }
    return pageHeightArr;
}

function getByClass(oParent, sClass){
    var aResult=[];
    var aEle=oParent.getElementsByTagName('*');
    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className==sClass)
        {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}

function scroll(){
    console.log("Scroll start ...");
    var clientHeight = window.innerHeight - headerHeight - footerHeight;
    var scroTop = document.documentElement.scrollTop - otherContentHeight;
    var totalHeight = 0;
    for (var i=0;i<pages.length;i++)
    { 
        var pageHeight = pageHeightArr[i];
        var preHeight = totalHeight;
        totalHeight = totalHeight + pageHeight;
        if(scroTop<totalHeight && (scroTop+clientHeight)>= preHeight) {
            console.log("**********Page active: " + (i+1) + "***********");
        } else {
            console.log("**********Page inactive: " + (i+1) + "***********");
        }
    }
    console.log("Scroll stop ...");
}
