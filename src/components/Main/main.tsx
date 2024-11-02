import { IUser } from '../../types/types';
import user_logo from '../../images/User_logo.svg'

type IMain = {
    users: IUser[]
}

const Main = ({ users }: IMain) => {
    return (
        <>
        <header>
            <h1 className="title">User To-Do Table</h1>
            <h2 className="subTitle">User task table for effective planning</h2>
        </header>
        <main>
            <div className="table_wrapper">
            <table className='table'>
            <tr className='table_header'>
                <th className='id_column_title table_header_text'>#</th>
                <th className='user_column_title table_header_text'>username</th>
                <th className='todoCount_column_title table_header_text'>to-do count</th>
            </tr>
                {
                users.map((user) => (
                    <tr className='table_row'>
                    <td className='id_column'>{user.id.toString()}</td>
                    <td className='user_column'>
                        <div className='user_column_data'>
                        <div className="user_avatar_wrapper">
                            <img src={user_logo} alt="Аватар пользователя" className='user_avatar' />
                        </div>
                        <div className="user_info">
                            <p className='user_name'>{user.name}</p>
                            <a href={`mailto: ${user.email}`} target='_blank' className='user_email' rel="noreferrer">{user.email}</a>
                        </div>
                        </div>
                    </td>
                    <td className='todoCount_column'>{user.count.toString()}</td>
                    </tr>
                ))
                }
            </table>
            </div>
        </main>
        </>
    );
}

export default Main;
