import React from 'react'


function Forms({userData, handleChange, labelValue}) {
  return (
    
      <form className='formulario'>
      
    <div style={{ display: "flex", marginBottom: 8 }}>
    <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
    <input
      value={userData.name}
      name="name"
      type="text"
      required
      onChange={handleChange}
    />
  </div>
   

  <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Email</label>
        <input
        
          value={userData.email}
          name="email"
          type="email"
          required
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Phone</label>
        <input
          value={userData.phone}
          name="phone"
          type="text"
          required
          onChange={handleChange}
        />
      </div>
</form>     
  )
}

export default Forms