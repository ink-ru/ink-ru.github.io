
// JS

function expand_all()
{
  document.body.querySelectorAll('details').forEach((e) => {(e.hasAttribute('open')) ? e.removeAttribute('open') : e.setAttribute('open',true); })
}

String.prototype.hashCode = function() {
  var salt_hash = 5381, i = this.length
  while(i)
    salt_hash = (salt_hash * 33) ^ this.charCodeAt(--i)
  return salt_hash >>> 0;
}

String.prototype.OneHash = function() 
{
  let hash = 0;
  for (charIndex = 0; charIndex < this.length; ++charIndex)
  {
    hash += this.charCodeAt(charIndex);
    hash += hash << 10;
    hash ^= hash >> 6;
  }
  hash += hash << 3;
  hash ^= hash >> 11;

  // Second round
  var salt_hash = 5381, i = this.length;
  while(i) salt_hash = (salt_hash * 33) ^ this.charCodeAt(--i);

  //4,294,967,295 is FFFFFFFF, the maximum 32 bit unsigned integer value, used here as a mask.
  return (((hash + (hash << 15)) & 4294967295) >>> 0).toString(16) + (salt_hash >>> 0).toString(16)
};

function trns(text)
{
    text = text
        .replace(/\u0401/g, 'YO').replace(/\u0419/g, 'I')
        .replace(/\u0426/g, 'TS').replace(/\u0423/g, 'U')
        .replace(/\u041A/g, 'K' ).replace(/\u0415/g, 'E')
        .replace(/\u041D/g, 'N' ).replace(/\u0413/g, 'G')
        .replace(/\u0428/g, 'SH').replace(/\u0429/g, 'SCH')
        .replace(/\u0417/g, 'Z' ).replace(/\u0425/g, 'H')
        .replace(/\u0424/g, 'F' ).replace(/\u042B/g, 'I')
        .replace(/\u0412/g, 'V' ).replace(/\u041F/g, 'P')
        .replace(/\u0420/g, 'R' ).replace(/\u041E/g, 'O')
        .replace(/\u041B/g, 'L' ).replace(/\u0414/g, 'D')
        .replace(/\u0416/g, 'ZH').replace(/\u042D/g, 'E')
        .replace(/\u0421/g, 'S').replace(/\u041C/g, 'M')
        .replace(/\u0418/g, 'I').replace(/\u0422/g, 'T')
        .replace(/\u042F/g, 'Ya').replace(/\u0427/g, 'CH')
        .replace(/\u042E/g, 'YU').replace(/\u0411/g, 'B')
        .replace(/\u0451/g, 'yo').replace(/\u0439/g, 'i')
        .replace(/\u0446/g, 'ts').replace(/\u0443/g, 'u')
        .replace(/\u043A/g, 'k').replace(/\u0435/g, 'e')
        .replace(/\u043D/g, 'n').replace(/\u0433/g, 'g')
        .replace(/\u0448/g, 'sh').replace(/\u0449/g, 'sch')
        .replace(/\u0437/g, 'z').replace(/\u0445/g, 'h')
        .replace(/\u0410/g, 'a').replace(/\u0444/g, 'f')
        .replace(/\u044B/g, 'i').replace(/\u0432/g, 'v')
        .replace(/\u0430/g, 'a').replace(/\u043F/g, 'p')
        .replace(/\u0440/g, 'r').replace(/\u043E/g, 'o')
        .replace(/\u043B/g, 'l').replace(/\u0434/g, 'd')
        .replace(/\u0436/g, 'zh').replace(/\u044D/g, 'e')
        .replace(/\u044F/g, 'ya').replace(/\u0447/g, 'ch')
        .replace(/\u0441/g, 's').replace(/\u043C/g, 'm')
        .replace(/\u0438/g, 'i').replace(/\u0442/g, 't')
        .replace(/\u0431/g, 'b').replace(/\u044E/g, 'yu')
        .replace(/\u042A/g, "").replace(/\u044A/g, "")
        .replace(/\u042C/g, "").replace(/\u044C/g, "");

    return text;
};

function put_details(title, descr, parent_el, new_parent_el)
{

  $(parent_el).append("<details><summary>" + title +"</summary><span id=\"" + new_parent_el + "\"><i>" + descr + "</i></span></details>");

  return true;
}


function parseTree(data_json, target_dom_obj = 'body')
{
  var parent_el = target_dom_obj;
  var level_counter = 1;

  for (var name in data_json)
  {
    
    if (typeof data_json[name] === "object")
    {
      console.info(name);
      let new_parent_el = name.split(' ').join('_').OneHash();
      // new_parent_el = trns(new_parent_el);

      put_details(name, data_json[name].hasOwnProperty('descr') ? data_json[name]['descr'] : '', "#" + parent_el, new_parent_el);

      parseTree(data_json[name], new_parent_el);
    }

    if(this.level_counter > 200) return false;
      else this.level_counter++;
 
  }

  return true;
}

$(function () {

  parseTree(data, "place");

  
  $( "#expand_all" ).on( "click", function(obj) {
    expand_all();
    $( this ).parent().toggleClass( "active" );
  });

  

});
