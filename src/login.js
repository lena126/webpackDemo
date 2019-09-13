import './style.css';

export default function Lohgin(){
    console.log('login'); // eslint-disable-line
    var button = document.createElement('button');
    button.innerHTML='点击';
    document.body.appendChild(button);

    button.onclick=function(){
        var div=document.createElement('div');
        div.innerHTML='item';
        document.body.appendChild(div);
    }
}
