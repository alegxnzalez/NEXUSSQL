// BS_REASON_CODE.js

window.BS_REASON_CODE = {
  "tables": {
    "BS_REASON_CODE": {
      "columns": {
        "BS_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "BS_REASON_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "REQUIREMENT_FLAGS": {
          "type": "VARCHAR2(5)",
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
      "fk_tables": [
        "AGENT_ACTION_DETAILS",
        "AUDIT_TRAIL",
        "BS_EVENT_GROUP_CLASSIFY",
        "BS_QUICK_CODE",
        "BS_REASON_CODE_PROFILE_D",
        "GTM_DECL_MESSAGE",
        "GTM_LICENSE_LINE_USAGE",
        "IE_SHIPMENTSTATUS",
        "MONITOR_AGENT",
        "MONITOR_AGENT_EVENT",
        "OBS_STATUS_HISTORY",
        "ORDER_RELEASE_STATUS_HISTORY",
        "QUICK_EVENT",
        "SKU_EVENT"
      ]
    }
  }
};
