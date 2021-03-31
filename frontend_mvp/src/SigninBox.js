function SigninBox() {
  return (
    <div className="signin bg-gray-200 h-10 w-1/5 m-auto">
      <p className="pr-5 m-auto text-base text-gray-700 md:text-lg break-normal">
        already have an account?
        <a href="/login" className="text-indigo-400">
          {" "}
          sign in
        </a>
      </p>
    </div>
  );
}

export default SigninBox;
