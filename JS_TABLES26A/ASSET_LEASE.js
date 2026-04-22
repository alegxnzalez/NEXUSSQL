// ASSET_LEASE.js

window.ASSET_LEASE = {
  "tables": {
    "ASSET_LEASE": {
      "columns": {
        "ASSET_LEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Lease Unique ID"
},
        "ASSET_LEASE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Lease ID"
},
        "ASSET_LEASE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "O",
                    "P",
                    "A"
          ],
          "info": "The Type of Lease for the assets. O = Owned, P = Private, A = All."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date from which the lease is effective."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date at which the lease expires."
},
        "OWNER_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Owner Name of the leased assets."
},
        "LESSOR": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "Company who grants lease."
},
        "LESSEE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "Company to whom the lease is granted to."
},
        "LEASE_CHARGE_PER_DAY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Lease Charge Per Day"
},
        "LEASE_CHARGE_PER_DAY_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Lease Charge Currency"
},
        "LEASE_CHARGE_PER_DAY_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Lease Charge Base Amount"
},
        "UM_CHARGE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "UMLER Mileage Charge"
},
        "UM_CHARGE_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "UMLER Mileage Charge Currency"
},
        "UM_CHARGE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "UMLER Mileage Charge Base Amount"
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
        "UM_CHARGE_UNIT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "UMLER Mileage Charge Unit (example, 2)"
},
        "UM_CHARGE_UNIT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "UMLER Mileage Charge Unit in Base UOM"
},
        "UM_CHARGE_UNIT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "UMLER Mileage Charge Unit (example, Mile)"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Lease Description"
},
        "OWNERSHIP_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Owner of the leased assets."
}
      },
      "fk_tables": []
    }
  }
};