
  <form className="px-7 h-screen grid justify-center items-center">
    <div className="grid gap-6" id="form">
      <div className="w-full flex gap-3">
        <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black" type="text" placeholder="First Name" id="First-Name" name="First-Name" required="">
        <input className="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="text" placeholder="Last Name" id="Last-Name" name="Last-Name">
      </div>
      <div className="grid gap-6 w-full">
        <input className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="Email" placeholder="Email" id="Email" name="email">
        <input className="p-3 shadow-2xl   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]" type="date" required="">
      </div>
      <div className="flex gap-3">
        <input className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Password" id="password" name="password" required="">
        <input className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Confirm password" required="">
      </div>
      <button className="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold" type="submit">Submit</button>
    </div>
  </form>
