import {Formik} from 'formik';
import GetStartBtn from '../buttons/startBtn'
function Form(){
    return(
        <div>
        <Formik
       initialValues={{ email: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
           errors.email = 'Invalid Email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(`Updates wiil send to this address:> ${values}`);
           setSubmitting(false);
         }, 400);
       }}
        >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             placeholder='Updates in your inbox...'
             className='p-2 rounded-full text-sm mr-5'
           />
           <GetStartBtn text='Go' disabled= {isSubmitting}/>
           <section className='text-red-600 ml-2 mt-2'>
             {errors.email && touched.email && errors.email}
           </section> 
           
         </form>
       )}
     </Formik>
        </div>
    )
}

export default Form;