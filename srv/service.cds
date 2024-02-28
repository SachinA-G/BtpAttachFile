using db from '../db/schema';


service myService{
    entity hospital as projection on db.hospital;
     entity Files as projection on db.Files;
}