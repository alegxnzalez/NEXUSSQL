// OBJECT_DOCUMENT_SET_SUBSC.js

window.OBJECT_DOCUMENT_SET_SUBSC = {
  "tables": {
    "OBJECT_DOCUMENT_SET_SUBSC": {
      "description": "The table holds the contacts to which the Document Set has been sent and also holds the last sent date of the notification.",
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "DOCUMENT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OBJECT_DOCUMENT_SET",
          "info": "ID of the document set."
},
        "OWNER_DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OBJECT_DOCUMENT_SET",
          "info": "The data query type to which the document set belongs."
},
        "OWNER_OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OBJECT_DOCUMENT_SET",
          "info": "The owner object to which the document set belongs."
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The contact to which the document set is sent or will be sent."
},
        "LAST_SENT_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The last sent date of the document set."
},
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD",
          "info": "The communication method by which the document set is to be sent."
}
      },
      "fk_tables": []
    }
  }
};