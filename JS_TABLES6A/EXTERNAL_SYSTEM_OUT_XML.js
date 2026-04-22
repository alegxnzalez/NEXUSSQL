// EXTERNAL_SYSTEM_OUT_XML.js

window.EXTERNAL_SYSTEM_OUT_XML = {
  "tables": {
    "EXTERNAL_SYSTEM_OUT_XML": {
      "columns": {
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EXTERNAL_SYSTEM",
          "info": "Reference to row in the external system table. "
        },
        "INT_GLOG_XML_ELEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INT_GLOG_XML_ELEMENT",
          "info": "Reference to row in int_glog_xml_element table.   Specifies the G-Log XML Element type to which this out xml profile applies. "
        },
        "OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OUT_XML_PROFILE",
          "info": "Reference to row in outbound xml profile table.  When sending an outbound xml transmission to this external system, this profile will be used to determin the content of the xml transmission."
        },
        "TRANSMISSION_PRIORITY": {
          "type": "NUMBER(2)",
          "nullable": true
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
