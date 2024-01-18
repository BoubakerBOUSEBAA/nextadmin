import styles from '@/app/ui/login/login.module.css'
const LoginPage = () => {
    return (
        <div className={styles.container}>
            
            <form action="" className={styles.form}>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    className={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className={styles.input}
                    required
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage