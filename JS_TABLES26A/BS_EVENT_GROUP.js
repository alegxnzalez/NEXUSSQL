// BS_EVENT_GROUP.js

window.BS_EVENT_GROUP = {
  "tables": {
    "BS_EVENT_GROUP": {
      "columns": {
        "BS_EVENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "BS_EVENT_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE"
},
        "BS_EVENT_GROUP_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "BS_EVENT_GROUP_DESCRIPTION": {
          "type": "VARCHAR2(512)",
          "nullable": true
},
        "IMAGE_FILE": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "STATUS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STATUS_VALUE"
},
        "STATUS_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STATUS_VALUE"
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
        "BS_EVENT_GROUP_ATTRIBUTE",
        "BS_EVENT_GROUP_CLASSIFY",
        "OBS_STATUS_HISTORY_EVENT_GROUP",
        "OR_STATUS_HISTORY_EVENT_GROUP",
        "SG_EVENT_GROUP",
        "SHIPMENT",
        "SS_EVENT",
        "SS_STATUS_HISTORY_EVENT_GROUP"
]
    }
  }
};