// SAVED_QUERY.js

window.SAVED_QUERY = {
  "tables": {
    "SAVED_QUERY": {
      "columns": {
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SAVED_QUERY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false
        },
        "USER_QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false
        },
        "SQL_FIND_ALL": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SQL_CHECK_ONE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "USE_IN_FINDER": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identify if the saved query can be displayed in the finder or saved query screen.  It is used to support direct SQL for agent saved condition.  N means finder should not display the query, and saved query manager screen should display it as pure sql statement. "
        },
        "IS_CONDITION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_HIDDEN_FOR_MILESTONES": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If \"Y\", this saved query is used by milestone monitors and should not be displayed in finder result page."
        },
        "BIND_PARAM": {
          "type": "CLOB",
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "AGENT",
        "APP_ACTION_MORG_ACCESS",
        "AUTO_GRANTOR",
        "BUSINESS_MONITOR_D",
        "GTM_CRULE_TLINE_SAVEDQUERY",
        "GTM_DT_CONFIG_RULE",
        "GTM_LICENSE_CODE_OPTION",
        "GTM_TIP_RULE",
        "LANE_SUMMARY",
        "LNM_PROJECT",
        "LNM_SCENARIO",
        "MIGRATION_OBJECT_GROUP",
        "ML_PROJECT_D",
        "MONITOR_AGENT",
        "MONITOR_AGENT_LINK",
        "PLAN_PARTITION",
        "P_SHIPMENT_SET",
        "QUICK_EVENT",
        "REPORT_PARAMETER",
        "SAVED_CONDITION_QUERY",
        "SAVED_QUERY_ACCESS",
        "SAVED_QUERY_SORT_ORDER",
        "SAVED_QUERY_VALUES",
        "WORK_QUEUE"
      ]
    }
  }
};
