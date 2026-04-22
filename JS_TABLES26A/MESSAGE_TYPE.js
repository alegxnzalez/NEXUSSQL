// MESSAGE_TYPE.js

window.MESSAGE_TYPE = {
  "tables": {
    "MESSAGE_TYPE": {
      "columns": {
        "MESSAGE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "MESSAGE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DIRECTION": {
          "type": "VARCHAR2(8)",
          "nullable": true,
          "values": [
                    "INBOUND",
                    "OUTBOUND",
                    "BOTH"
          ]
},
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
          "nullable": true
},
        "IS_ACTIONABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "RESULT_STYLE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE"
},
        "MSG_CENTER_CREATE_TYPE": {
          "type": "VARCHAR2(8)",
          "nullable": true,
          "values": [
                    "ALWAYS",
                    "NO",
                    "ON ERROR"
          ]
},
        "MSG_CENTER_USER_GID": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "GL_USER"
},
        "IP_DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE"
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL"
},
        "MSG_CENTER_STYLE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE"
},
        "IS_PERSIST_OUTBOUND": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "NOTIFY_SUBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NOTIFY_SUBJECT"
},
        "MESSAGE_PRIORITY": {
          "type": "NUMBER(2)",
          "nullable": true
},
        "MAKE_DEVICE_ASSOCIATION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "REMOVE_DEVICE_ASSOCIATION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
        "I_MESSAGE"
]
    }
  }
};