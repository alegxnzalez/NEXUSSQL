// TRANSPORTATION_WORKBENCH.js

window.TRANSPORTATION_WORKBENCH = {
  "tables": {
    "TRANSPORTATION_WORKBENCH": {
      "columns": {
        "LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The Layout GID provided by the user. This needs to be unique. What this means is that two users cannot share the same layout gid. "
        },
        "LAYOUT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true
        },
        "GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_USER",
          "info": "gl_user_gid is deprecated as of 6.4.3 "
        },
        "LAYOUT_NUMBER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "This corersponds to the internal layout being used for a layout id for a user.  gl_user_gid and layout_number form a unique constraint "
        },
        "LOGIC_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOGIC_CONFIG"
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
        "LAYOUT_SEQ_NUM": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "A unique sequence number to identify the layout. "
        },
        "LAYOUT_XML": {
          "type": "CLOB",
          "nullable": true
        },
        "GENERATE_MDS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether to re-generate related MDS customization documents from layout XML. Typically populated by migration project, checked and reset by Workbench Designer at runtime. "
        },
        "AUTO_REFRESH": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether Workbench should auto refresh data for all components in the layout. "
        },
        "AUTO_REFRESH_INTERVAL": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Specify the frequency of auto refresh.  For performance purpose, the interval should be at least 5 minutes. "
        },
        "AUTO_REFRESH_INTERVAL_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AUTO_REFRESH_INTERVAL_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LAYOUT_FORMAT": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "An optional layout format (skin) predefined by Workbench"
        }
      },
      "fk_tables": [
        "TRANSPORTATION_WORKBENCH_XML",
        "WORKBENCH_ACCESS"
      ]
    }
  }
};
