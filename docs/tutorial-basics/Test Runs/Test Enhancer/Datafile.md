---
sidebar_position: 3
---

# Data File Upload Variables

To analyze variables, use a data file that contains events and their associated variables. You can upload these in a file format such as CSV, XLS or other text files. Alternatively, you can enter event data directly into the simulator interface. To perform an attribute analysis, use an event data file that includes attribute values for your events.

![Datafile](/img/datafile.png)

When you click on the add File button, you can upload a file by clicking on it or dragging and dropping it directly. You can also upload a folder with multiple files.

![Datafile](/img/upload.png)

Accepted file type are: *.csv, .xls, .xlsx, .xlsm, .xlsb, .odf, .ods, .odt.*

When you upload the data file, it will look like this. 

![Datafile](/img/csv.png)
![Datafile](/img/ucsv.png)

You will see three buttons there: 

- **Delete** - *Delete the uploaded file*
- **View File** - *You can check what the file actually contains*

![Datafile](/img/view.png)

- **Download** - *You can download the uploaded file*
*It is necessary because you are able to share the test to someone else, so the other user can download the file and upload it whenever he/she wants.*

![Datafile](/img/download.png)

When a file is uploaded, the system identifies the file type. The file types include;

So in `Setup Dynamic Variables`, you can see the source saying `datafile`.

![Datafile](/img/vdatafile.png)

Wring allows you to flip data/variables from synthetic to datafile so the server only recognize the changed in Variable section. 

![Datafile](/img/source.png)

Now when you click on `Change Source` from datafile, you get synthetic data. 

![Datafile](/img/dy.png)

