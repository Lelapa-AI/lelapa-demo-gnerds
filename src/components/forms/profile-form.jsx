import  PropTypes from 'prop-types';

import { Button, Selector } from '../common';

export const ProfileForm = ({onSave}) => {

  return (
    <section className='flex flex-col items-center gap-5 mx-auto border p-4 rounded-lg border-primary/30'>
         <section className="flex items-center justify-center gap-2">
          <Selector mode='in' />
          <p>to</p>
          <Selector mode='out' />
        </section>
        <Button variant='primary' className='w-44 mt-[90%]' onClick={onSave}>Save Changes</Button>
    </section>
  )
}

ProfileForm.propTypes ={
    onSave: PropTypes.func.isRequired,
}
