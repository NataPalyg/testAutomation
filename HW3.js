$x('//*[@id="main-content"]/h1[1]')

$x("//img[@alt]")

$x("//button[text()='Start forming a habit!']")

$x(".//button[contains(text(),'habit')]")

$x("//img[@alt='Internal search button']")

$x("//input[@type='checkbox']")

//////Medium level

document.evaluate('//*[@id="main-content"]/h1', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

const alts = document.evaluate('//img[@alt]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
console.log("Found " + alts.snapshotLength + " images with the alt attribute.")

const btns = document.evaluate(".//button[contains(text(),'Start forming a habit!')]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
console.log("Found " + alts.snapshotLength + " buttons with the 'Start forming a habit!' text.")

const srch = document.evaluate("//img[@alt='Internal search button' and @src]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
srch ? console.log("Found search icon is " + window.getComputedStyle(srch).visibility) : console.log("Found search icon not found");

const chks = document.evaluate("//input[@type='checkbox']", document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
var chkbox = chks.iterateNext();
var checked = 0, unchecked = 0;
while(chkbox) {
	chkbox.checked ? checked++ : unchecked++;
	chkbox = chks.iterateNext();		
}
console.log("Found " + checked + " checked and " + unchecked + " unchecked checkboxes")



