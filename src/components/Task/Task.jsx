import css from '../Task/Task.module.css';

export const Task = ({ tasks }) => {
    return (
        tasks.length !== 1 && (
            <ul className={css.ul}>
                {tasks.map(task => task !== '' && (
                    <div className={css.li}>
                        <li key={task}>{task}</li>
                        <svg id="icon-delete" width ="32" height="32" viewBox="0 0 32 32">
                        <path stroke-width="0.88" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="miter" d="M22.956 11.309l-0.96 12.503c0 1.081-0.877 1.958-1.958 1.958v0h-8.075c-1.081 0-1.958-0.877-1.958-1.958v0l-0.96-12.503"></path>
                        <path stroke-width="0.88" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="miter" d="M19.229 10.051h-5.83"></path>
                        <path stroke-width="0.88" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="miter" d="M11.25 10.051h-4.146v-1.212c0-0.495 0.401-0.896 0.896-0.896v0h6.027c0-0.003 0-0.006 0-0.009 0-0.941 0.884-1.704 1.973-1.704s1.973 0.763 1.973 1.704c0 0.003 0 0.006 0 0.009h6.027c0.495 0 0.896 0.401 0.896 0.896v0 1.212h-3.412"></path>
                        <path stroke-width="0.88" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="miter" d="M12.716 14.58v7.844"></path>
                        <path stroke-width="0.88" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="miter" d="M16 14.58v7.844"></path>
                        <path stroke-width="0.88" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="miter" d="M19.284 14.58v7.844"></path>
                        </svg>
                    </div>
                ))}
            </ul>
        )
    );
};