import React from "react";
import ContentTableRow from "./components/ContentTableRow";

function NoteBook() {
    return (
        <div>
            <table>
                <ContentTableRow propertyName="Content #" propertyValue="Placeholder" />
                <ContentTableRow propertyName="Content Type" propertyValue="Placeholder" />
                <ContentTableRow propertyName="Content Name" propertyValue="Placeholder" />
                <ContentTableRow propertyName="Author" propertyValue="Placeholder" />
                <ContentTableRow propertyName="Source" propertyValue="Placeholder" />
                <ContentTableRow propertyName="Length" propertyValue="Placeholder" />
                <ContentTableRow propertyName="Date of Publication" propertyValue="Placeholder" />
                <ContentTableRow propertyName="Date Consumed" propertyValue="Placeholder" />
            </table>
        </div>
    );
}  
export default NoteBook; 