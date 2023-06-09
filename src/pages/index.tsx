import {supabase} from "../lib/supaBaseClient"

function Netflix_Data({ movies } : any) {
    return (
        <div>
            <ul>
                {movies.map((movie : any) => (
                <div key={movie.id}>
                    {movie.Title}
                </div>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {

    console.log(supabase)
    let { data, error } = await supabase
    .from('Netflix_Data')
    .select('*')

    return {
        props: {
            movies: data
        },
    }
}

export default Netflix_Data;