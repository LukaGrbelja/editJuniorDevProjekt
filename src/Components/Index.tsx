import ExternalLink from "./HTMLcomponents/ExternalLink";

function Index(): JSX.Element {
    return (
        <>
            <h1>Pocetna</h1>
            <div className="intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Nisi porta lorem mollis aliquam. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Ipsum dolor sit amet consectetur adipiscing. Tristique magna sit amet purus gravida quis blandit. Nullam vehicula ipsum a arcu cursus vitae congue. Commodo odio aenean sed adipiscing diam. In pellentesque massa placerat duis ultricies lacus sed. Mattis nunc sed blandit libero volutpat.

                Felis imperdiet proin fermentum leo vel. Pellentesque pulvinar pellentesque habitant morbi. Nunc scelerisque viverra mauris in aliquam. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Purus faucibus ornare suspendisse sed nisi lacus sed. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Neque viverra justo nec ultrices dui sapien eget mi proin. Est ante in nibh mauris cursus mattis molestie a. Et ultrices neque ornare aenean euismod elementum nisi quis. Lacus vestibulum sed arcu non odio. Proin fermentum leo vel orci. Quis risus sed vulputate odio ut enim blandit. Viverra maecenas accumsan lacus vel facilisis volutpat est. Felis donec et odio pellentesque.

                Integer malesuada nunc vel risus commodo viverra. In aliquam sem fringilla ut. Duis convallis convallis tellus id interdum velit laoreet id. Semper risus in hendrerit gravida rutrum quisque. Morbi enim nunc faucibus a pellentesque. Tincidunt tortor aliquam nulla facilisi cras. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Etiam dignissim diam quis enim lobortis. Donec et odio pellentesque diam volutpat commodo. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Dolor sit amet consectetur adipiscing. Metus dictum at tempor commodo ullamcorper a. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Maecenas accumsan lacus vel facilisis volutpat. Quis auctor elit sed vulputate mi sit amet mauris. Turpis massa sed elementum tempus egestas sed sed.
            </div>
            <ExternalLink url="https://github.com/LukaGrbelja/editJuniorDevProjekt" tekst="Github profil" />
        </>
    );
}

const indexRoute: route = {
    path: "/",
    element: <Index />,
    children: []
}

export default indexRoute;