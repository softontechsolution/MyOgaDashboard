import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';

const Widget = ({ type }) => {
    let data;

    //trmporary data
    const amount = 110;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "see all users",
                icon: (
                    <PersonOutlineIcon
                        className="icon" 
                        style={{
                            color: "#e290fa",
                            backgroundColor: "#dcf3fd",
                        }}
                    />
                ),
            };
            break;
        
        case "driver":
            data = {
                title: "DDRIVERS",
                isMoney: false,
                link: "see all drivers",
                icon: (
                    <DirectionsCarIcon
                        className="icon"
                        style={{
                            color: "#e290fa",
                            backgroundColor: "#dcf3fd",
                        }}
                    />
                ),
            };
            break;

        case "booking":
            data = {
                title: "BOOKINGS",
                isMoney: false,
                link: "see all bookings",
                icon:( 
                    <LibraryBooksIcon
                        className="icon"
                        style={{
                            color: "#e290fa",
                            backgroundColor: "#dcf3fd",
                        }}
                    />
                ),
            };
            break;

        case "company":
            data = {
                title: "COMPANIES",
                isMoney: false,
                link: "see all companies",
                icon: (
                    <EmojiTransportationIcon
                        className="icon"
                        style={{
                            color: "#e290fa",
                            backgroundColor: "#dcf3fd",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
}
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "NGN"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    {diff}%
                </div>
                    {data.icon}
            </div>
        </div>
    )
}

export default Widget