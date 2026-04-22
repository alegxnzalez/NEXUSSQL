// DOCUMENT_SET_SUBSC_IPQ.js

window.DOCUMENT_SET_SUBSC_IPQ = {
  "tables": {
    "DOCUMENT_SET_SUBSC_IPQ": {
      "description": "The table holds the involved party qualifiers mentioned in the document set.",
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
          "foreign_key": "DOCUMENT_SET",
          "info": "ID of the document set."
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "Identifies the involved party contact for the object specified by the document set that will be used for sending the set of documents."
}
      },
      "fk_tables": []
    }
  }
};