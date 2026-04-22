// XML_BUILDER.js

window.XML_BUILDER = {
  "tables": {
    "XML_BUILDER": {
      "description": "This table enumerates the xml builder classes used to generate outbound xml documents.  Each xml_builder defines a 'chunk' of xml that may be excluded from an outbound xml document. Each out_xml_profile_d record points to a given xml builder.",
      "columns": {
        "XML_BUILDER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Globally unique identifier for a given xml builder class.  GID and XID are the same in this case, since only public data resides in this table."
},
        "XML_BUILDER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain unique identifier for a given xml builder class."
},
        "JAVA_CLASS_NAME": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "info": "Fully qualified java class name for an xml builder class."
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "OUT_XML_PROFILE_D"
]
    }
  }
};