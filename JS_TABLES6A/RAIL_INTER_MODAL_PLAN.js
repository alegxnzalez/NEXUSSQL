// RAIL_INTER_MODAL_PLAN.js

window.RAIL_INTER_MODAL_PLAN = {
  "tables": {
    "RAIL_INTER_MODAL_PLAN": {
      "columns": {
        "RAIL_INTER_MODAL_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "This is the rail inter modal plan code gid. "
        },
        "RAIL_INTER_MODAL_PLAN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This is the rail inter modal plan code xid. "
        },
        "UNIT_OWNER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "This is the unit owner. "
        },
        "SERVICE_PROVIDED": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Description of  the service provided by the carrier. "
        },
        "CHARGE_DETERMINATION": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Description of the determination of charges."
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
        "LEG",
        "RATE_GEO",
        "RATE_OFFERING",
        "SHIPMENT"
      ]
    }
  }
};
