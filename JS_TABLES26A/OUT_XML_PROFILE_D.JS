// OUT_XML_PROFILE_D.js

window.OUT_XML_PROFILE_D = {
  "tables": {
    "OUT_XML_PROFILE_D": {
      "description": "This table and OUT_XMl_PROFILE table together specify the outbound xml profiles that can be used to limit the size of xml documents pushed out from gc3 to external systems.  The Out_xml_profile table contains the header record for the profile and defines the 'gid' for that profile.  The out_xml_profile_d table provides the details which comprise a given profile.  Each record in the out_xml_profile_d table indicates a specific 'chunk' of xml that should be excluded from the outbound document.",
      "columns": {
        "OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OUT_XML_PROFILE",
          "info": "Reference to parent outbound xml profile."
},
        "XML_BUILDER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "XML_BUILDER",
          "info": "Reference to row in xml builder table."
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
      "fk_tables": []
    }
  }
};