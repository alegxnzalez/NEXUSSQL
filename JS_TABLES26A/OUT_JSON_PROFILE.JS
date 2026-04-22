// OUT_JSON_PROFILE.js

window.OUT_JSON_PROFILE = {
  "tables": {
    "OUT_JSON_PROFILE": {
      "description": "This table is used to store out json profile details.",
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
        "OUT_JSON_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The globally-unique identifier for an out JSON profile."
},
        "OUT_JSON_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The domain-unique identifier for an out JSON profile."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Description for the out JSON profile."
},
        "RESOURCE_ID": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "Root resource or the sub resource ID. e.g. orderReleases, orderReleases.lines or orderReleases.lines.refnums etc..."
},
        "IS_EXPAND_ALL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Controls whether both the parent and the child resources are expanded when you query a root resource. If the value is 'N', only parent resource is expanded and links are provided for child resources."
},
        "IS_EXPAND_REFS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Controls whether an ID will be shown for a foreign key or there will be a URL link provided to the referenced resource."
},
        "IS_EXPAND_REF_FULL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Controls whether the referenced resources are fully expanded or not."
}
      },
      "fk_tables": [
        "EXTERNAL_SYSTEM_OUT_JSON",
        "OUT_JSON_PROFILE_CHILD",
        "OUT_JSON_PROFILE_FIELDS"
]
    }
  }
};