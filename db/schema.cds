namespace db;
using {cuid,managed} from '@sap/cds/common';

entity hospital{
    key id : String;
    name : String;
}
//change

entity Files: cuid, managed{
    @Core.MediaType: mediaType
    content: LargeBinary;
    @Core.IsMediaType: true
    mediaType: String;
    fileName: String;
    size: Integer;
    url: String;
}

