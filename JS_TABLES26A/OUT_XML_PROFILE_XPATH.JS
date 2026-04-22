// OUT_XML_PROFILE_XPATH.js

window.OUT_XML_PROFILE_XPATH = {
  "tables": {
    "OUT_XML_PROFILE_XPATH": {
      "description": "This table, with the OUT_XML_PROFILE table, provides additional flexibility in specifying outbound xml profiles.  This table provides the ability to spcecify the element to the excluded via a simplified XPath expression.",
      "columns": {
        "OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OUT_XML_PROFILE",
          "info": "Reference to parent outbound xml profile."
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number."
},
        "XML_PATH": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "info": "Specifies the XPath for the element."
},
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
}
      },
      "fk_tables": []
    }
  }
};