// OUT_XML_PROFILE_CHILD.js

window.OUT_XML_PROFILE_CHILD = {
  "tables": {
    "OUT_XML_PROFILE_CHILD": {
      "columns": {
        "OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OUT_XML_PROFILE",
          "info": "Reference to parent outbound xml profile. "
        },
        "CHILD_OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OUT_XML_PROFILE",
          "info": "Reference to the child outbound xml profile."
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
