
import './loginpage.scss';

import { useForm } from "react-hook-form";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from 'utils/router';


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();  // Hook để chuyển trang

    const login = async (data) => {
        // const result = await loginauth(data);

        // if (result.status === "success") {
        //     console.log("✅ Đăng nhập thành công!");
        //     navigate("/dashboard");  // Chuyển đến trang Dashboard
        // } else {
        //     alert("❌ Đăng nhập thất bại: " + result.message);
        // }
        console.log(data);
        navigate(ROUTERS.ADMIN.ORDERS)
    };

    const registerOpt = {
        username: { required: "Vui lòng nhập tên đăng nhập" },
        password: {
            required: "Vui lòng nhập mật khẩu",
            minLength: {
                value: 8,
                message: "Mật khẩu phải lớn hơn 8 kí tự"
            }
        }
    };
    return (
        <>
            <div className='container-wrapper'>
                <div className='wrapper'>
                    <form onSubmit={handleSubmit(login)}>
                        <h2>Truy cập hệ thống quản trị</h2>

                        <div className='input-box'>
                            <input
                                type="text"
                                placeholder='Tên đăng nhập'
                                {...register('username', registerOpt.username)}
                            />
                            <FaUser className='icon' />
                        </div>
                        {errors.username && <p className="error">{errors.username.message}</p>}

                        <div className='input-box'>
                            <input
                                type="password"
                                placeholder='Mật khẩu'
                                {...register('password', registerOpt.password)}
                            />
                            <FaLock className='icon' />
                        </div>
                        {errors.password && <p className="error">{errors.password.message}</p>}

                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#">Forgot password</a>
                        </div>

                        <button className='btn' type='submit'>Đăng nhập</button>

                        <div className="register-link">
                            <p>Bạn chưa có tài khoản? <a href="#">Đăng ký</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default LoginPage;