
import { Link } from 'react-router-dom';
function EnHomepage(){
    return(
        <>
        <h1>
            مرحبا, اللغة الانجليزية لم اقم باضفتها بعد
        </h1>
        <h1>
            Hello, I haven't added English yet.
        </h1>
        <h1>
            שלום, עדיין לא הוספתי אנגלית.
        </h1>
        <hr></hr>
        <Link to="/">
        <h1>back</h1>
        </Link>
        <hr></hr>
        
        <footer>
            <h1>تم انشاء الموقع بواسطة الطالب عمر</h1>
            <h1>this site have been created by student omar</h1>
        </footer>
        </>
    );
}
export default EnHomepage