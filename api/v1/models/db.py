import psycopg2, os
import psycopg2.extras

class Db():
    def __init__(self, conn=None):
        if conn is not None:
            self._conn_str = conn
        else:
            self._conn_str = os.environ.get('DATABASE_URL')

    def query(self, sql, data=None, verbose=False):
        conn = psycopg2.connect(self._conn_str)
        cur = conn.cursor(cursor_factory = psycopg2.extras.DictCursor)
        if verbose == True:
            print(cur.mogrify(sql, data))
        cur.execute(sql, data)
        conn.commit()

        if cur.description is not None:
            results = cur.fetchall()

        cur.close()
        conn.close()

        if cur.description is not None:
            if len(results) == 1:
                return results[0]
            elif len(results) == 0:
                return None
            else:
                return results

    def test_conn(self):
        conn = psycopg2.connect(self._conn_str)
        conn.close()
        return True



# UNIT TESTS
if __name__=='__main__':
    pass
    db = Db()
    sql = "select * from users;"
    print(db.query(sql))
    