import Page from '../../components/page';
import { AppData } from '../../appdata';
import Listing from '../../components/listing';

export default function Apps() {
    return (
        <Page title={`All Apps - BlackBerry Store`}>
            <Listing data={AppData} title='Apps' url='/apps/' />
        </Page >
    );
}